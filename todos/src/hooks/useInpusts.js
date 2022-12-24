import { useState } from "react";

export function useInpusts(initialState) {
  
  // 인풋 상태
  const [inputs, setInputs] = useState(initialState);
  

  // 변경시
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };


  // 리셋
  const reset = () => {
    setInputs(initialState);
  };
  
  return [inputs, onChange, reset];
}