import React from "react";

export default function CardComment({ props }) {
  return (
    <>
      <div className="space-y-4 rounded-xl bg-slate-200 p-4 hover:bg-slate-300">
        <div className="user flex items-center gap-4">
          <img
            className="user__image"
            src={props?.image || "/new/Design/img/avatar/04.png"}
            alt=""
          />
          <span className="space-y-2">
            {" "}
            <h4>{props?.name || "Patricia"}</h4>
            <div className="flex items-center gap-2">
              {" "}
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.53125 2.5H10.4688V1.40625C10.4688 1.05078 10.7422 0.75 11.125 0.75C11.4805 0.75 11.7812 1.05078 11.7812 1.40625V2.5H12.875C13.832 2.5 14.625 3.29297 14.625 4.25V13C14.625 13.9844 13.832 14.75 12.875 14.75H4.125C3.14062 14.75 2.375 13.9844 2.375 13V4.25C2.375 3.29297 3.14062 2.5 4.125 2.5H5.21875V1.40625C5.21875 1.05078 5.49219 0.75 5.875 0.75C6.23047 0.75 6.53125 1.05078 6.53125 1.40625V2.5ZM3.6875 13C3.6875 13.2461 3.87891 13.4375 4.125 13.4375H12.875C13.0938 13.4375 13.3125 13.2461 13.3125 13V6H3.6875V13Z"
                  fill="#3E3232"
                  fillOpacity="0.5"
                />
              </svg>
              {new Date(props?.createdAt).toLocaleDateString("vi-VN") ||
                "2022 04 July"}
            </div>
          </span>
        </div>
        <div>
          <p>
            {props?.content ||
              `An island (or isle) is an isolated piece of habitat that is
            surrounded by a dramatically different habitat, such as water. Very
            small islands such as emergent land features on atolls can be called
            islets, skerries, cays or keys.`}
          </p>
        </div>
      </div>
    </>
  );
}
