import supabase, {supabaseUrl} from "./supabase.js";

export async function getCabins(){

    const { data, error } = await supabase
        .from('cabins')
        .select('*')

    if(error){
        console.log(error)
        throw new Error("Cabins could not be loaded")
    }

    return data;
}

export async function createCabin(newCabin){
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;


    // 1. Create a cabin
    const { data, error } = await supabase
        .from('cabins')
        .insert([
            { ...newCabin, image: imagePath }
        ])
        .select()

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be created");
    }

    // 2. Upload an image
    const { error: storageError } = await supabase
        .storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uploading image
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Cabin image could not be uploaded and the cabin was not created"
        );
    }

    return data;
}

export async function deleteCabins(id){

    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if(error){
        console.log(error)
        throw new Error("Cabin could not be deleted")
    }
}