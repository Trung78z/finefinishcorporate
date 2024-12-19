import { formatContent } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import Link from "next/link";
import React from "react";

export default function CardPost({ item }) {
  console.log(item);
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Link href={`/new/${item?.slug}/${item?.category?.slug}`}>
          <img
            src={`${API_URL}/api/image/${item?.image}`}
            alt=""
            className="h-16 w-16 rounded-lg object-cover object-center"
          />
        </Link>
        <div>
          <Link href={`/new/${item?.slug}/${item?.category?.slug}`}>
            <h4 className="text-lg font-medium">
              {formatContent(item.title, 30)}
            </h4>
          </Link>
          <p>{item.author}</p>
        </div>
      </div>
    </>
  );
}
