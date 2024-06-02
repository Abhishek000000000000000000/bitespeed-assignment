import React from "react";
import "./Custom.css";
import { Handle, Position } from "reactflow";
import { AiOutlineMessage } from "react-icons/ai";
const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <div className="customMain">
        <div className="fixedCustom">
          <p>Message</p>
          <AiOutlineMessage />

        </div>
        <div>
          <p>{data.text || "Type Message"}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default TextNode;