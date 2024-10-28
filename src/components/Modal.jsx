import React, { useEffect, useState } from "react";

const Modal = ({ setShowModal, move, setMove }) => {
  const [moveDetails, setMoveDetails] = useState({});
  const [moveDesc, setMoveDesc] = useState([]);
  useEffect(() => {
    const fetchMoveDetails = async () => {
      try {
        const response = await fetch(move.move.url);
        const data = await response.json();
        console.log(data);
        console.log(data.name);
        setMoveDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoveDetails();
  }, [move]);
  useEffect(() => {
    const moveDescription = moveDetails?.flavor_text_entries?.filter(
      (entry) => {
        return entry?.version_group?.name === "firered-leafgreen";
      }
    );
    setMoveDesc(moveDescription);
  }, [moveDetails]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div className="w-[500px] bg-black text-white p-8 rounded-xl flex flex-col gap-4">
        <p>
          Move:{"  "} {moveDetails?.name}
        </p>
        <div className="flex justify-evenly">
          <p>type: {moveDetails?.type?.name}</p>
          <p>accuracy: {moveDetails?.accuracy}</p>
          <p>Power: {moveDetails?.power}</p>
        </div>

<div className="flex flex-col">
<p className="text-2xl">Description</p>
        {moveDesc?.map((desc, index) => (
          <p key={index}>{desc?.flavor_text}</p>
        ))}

</div>
        
      </div>
    </div>
  );
};

export default Modal;
