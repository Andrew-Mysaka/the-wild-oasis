import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-hot-toast";
import {updateSetting as updateSettingApi} from "../../services/apiSettings.js";

export function useUpdateSetting(){
    const queryClient = useQueryClient();

    const {mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("Setting successfully edited")
            queryClient.invalidateQueries({queryKey: ['settings']})
        },
        onError: error => {
            toast.error(error.message)
        }
    })

    return {isUpdating, updateSetting}
}