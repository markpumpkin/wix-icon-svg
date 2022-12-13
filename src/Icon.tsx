import React from "react";
import parse from "html-react-parser";

export type IconProps = {
    icon?: {
        category?: string;
        name?: string;
        svg?: string;
        linkImage?: string;
        tags?: string[];
    };
};

function Icon(props: IconProps) {
    const { icon } = props;

    const handleCopySvg = (e: any) => {
        e.preventDefault();
        let input = document.createElement("input"); // tạo thẻ input giả
        document.body.appendChild(input); // gán thẻ đó vào bất kì đâu (sao cho không bị ảnh hướng layout nào là được)
        input.value = icon?.svg || ""; // gán giá trị vào input
        input.select(); // focus vào input
        document.execCommand("copy"); // dùng lệnh này để copy text từ input
        input.remove();
    };

    return icon ? (
        <div className="item-icon">
            <input type="hidden" value={icon?.svg} />
            <span className="icon-svg">{icon?.svg && parse(icon.svg)}</span>
            <span className="icon-name">{icon?.name && icon.name}</span>
            {icon?.svg && (
                <a
                    href="/#"
                    title={`Copy ${icon?.name} SVG`}
                    className="icon-copy"
                    onClick={handleCopySvg}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M19,5 C19.5522847,5 20,5.44771525 20,6 L20,16 C20,16.5522847 19.5522847,17 19,17 L17,17 L17,19 C17,19.5522847 16.5522847,20 16,20 L6,20 C5.44771525,20 5,19.5522847 5,19 L5,9 C5,8.44771525 5.44771525,8 6,8 L8,8 L8,6 C8,5.44771525 8.44771525,5 9,5 L19,5 Z M8,9 L6,9 L6,19 L16,19 L16,17 L9,17 C8.44771525,17 8,16.5522847 8,16 L8,9 Z M19,6 L9,6 L9,16 L19,16 L19,6 Z"></path>
                    </svg>
                </a>
            )}
        </div>
    ) : null;
}

export default Icon;
