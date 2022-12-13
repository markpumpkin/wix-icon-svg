import _ from "lodash";
import { data as composer } from "./composer";
import { data as money } from "./money";
import { data as general } from "./general";
import { data as actions } from "./actions";
import { data as media } from "./media";
import { data as layout_sorting } from "./layout_sorting";
import { data as wix_brands } from "./wix_brands";
import { data as toggle } from "./toggle";
import { data as communication } from "./communication";
import { data as document } from "./document";
import { data as users } from "./users";
import { data as date_time } from "./date_time";
import { data as arrows } from "./arrows";
import { data as food } from "./food";
import { data as brands } from "./brands";
import { data as text } from "./text";

export const categories = [
    { label: "Composer", value: "composer" },
    { label: "Money", value: "money" },
    { label: "General", value: "general" },
    { label: "Actions", value: "actions" },
    { label: "Media", value: "media" },
    { label: "Layout & Sorting", value: "layout_sorting" },
    { label: "Wix Brands", value: "wix_brands" },
    { label: "Toggle", value: "toggle" },
    { label: "Communication", value: "communication" },
    { label: "Document", value: "document" },
    { label: "Users", value: "users" },
    { label: "Date & Time", value: "date_time" },
    { label: "Arrows", value: "arrows" },
    { label: "Food", value: "food" },
    { label: "Brands", value: "brands" },
    { label: "Text", value: "text" },
];

export const icons = [
    ..._.cloneDeep(composer),
    ..._.cloneDeep(money),
    ..._.cloneDeep(general),
    ..._.cloneDeep(actions),
    ..._.cloneDeep(media),
    ..._.cloneDeep(layout_sorting),
    ..._.cloneDeep(wix_brands),
    ..._.cloneDeep(toggle),
    ..._.cloneDeep(communication),
    ..._.cloneDeep(document),
    ..._.cloneDeep(users),
    ..._.cloneDeep(date_time),
    ..._.cloneDeep(arrows),
    ..._.cloneDeep(food),
    ..._.cloneDeep(brands),
    ..._.cloneDeep(text),
];
