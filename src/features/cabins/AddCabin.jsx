import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";

function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens={"cabin-form"}>
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name={"cabin-form"}>
                    <CreateCabinForm/>
                </Modal.Window>
            </Modal>
        </div>
    )
}

// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false)
//
//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal(showForm => !showForm)}>Add new Cabin</Button>
//             {isOpenModal &&
//                 <Modal onClose={() => setIsOpenModal(false)} >
//                     <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
//                 </Modal>
//             }
//         </div>
//     );
// }

export default AddCabin;