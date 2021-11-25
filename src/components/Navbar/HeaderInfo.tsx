import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderInfo = () => {
  const headers = [
    { title: "Bedava Kargo", icon: "truck" },
    { title: "Çoklu Ödeme Yöntemleri", icon: "credit-card" },
    { title: "(0216) 000 00 00 Müşteri Hizmetleri", icon: "phone-alt" },
  ];
  return (
    <div className="lg:block hidden h-10 bg-primary-header">
      <div className="max-w-3xl mx-auto w-full text-white flex justify-between items-center text-sm h-full">
        {headers.map((header, index) => {
          return (
            <div key={index}>
              <FontAwesomeIcon
                icon={header.icon as IconProp}
                className="mr-2"
                style={{
                  transform:
                    header.icon == "truck" ? "scaleX(-1)" : "scaleX(1)",
                }}
              />
              <span>{header.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderInfo;
