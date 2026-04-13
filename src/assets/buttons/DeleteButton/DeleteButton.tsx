import { DeleteIcon } from "../../icons/DeleteIcon";

import s from "./DeleteButton.module.css";

interface Props {
  visible?: boolean;
  onClickDelete: (meterId: string) => void;
  meterId:string
}

export const DeleteButton = ({ visible, onClickDelete, meterId }: Props) => {
  return (
    <button
      className={visible ? s.root : s.unVisible}
      onClick={() => onClickDelete(meterId)}
    >
      <DeleteIcon />
    </button>
  );
};
