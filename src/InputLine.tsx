import React from "react";

type Props = {
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: (text: string) => void;
};

export function TextInput({ className, onChange, value }: Props) {
  {
    return (
      <>
        <input
          type="text"
          value={value}
          className={`w-4 bg-blend-darken ${className}`}
          onChange={(e) => onChange(e)}
        />
      </>
    );
  }
}
