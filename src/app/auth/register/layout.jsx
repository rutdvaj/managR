import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <section className="dark:bg-slate-900 dark">{children}</section>
    </div>
  );
}
