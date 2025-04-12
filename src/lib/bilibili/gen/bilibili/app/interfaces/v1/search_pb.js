// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/interfaces/v1/search.proto (package bilibili.app.interface.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message bilibili.app.interface.v1.DefaultWordsReply
 */
export const DefaultWordsReply = proto3.makeMessageType(
  "bilibili.app.interface.v1.DefaultWordsReply",
  () => [
    { no: 1, name: "trackid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "show", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "word", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "show_front", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "exp_str", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "goto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.interface.v1.NftFaceIcon
 */
export const NftFaceIcon = proto3.makeMessageType(
  "bilibili.app.interface.v1.NftFaceIcon",
  () => [
    { no: 1, name: "region_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "show_status", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message bilibili.app.interface.v1.DefaultWordsReq
 */
export const DefaultWordsReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.DefaultWordsReq",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "login_event", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "teenagers_mode", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "lessons_mode", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "tab", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "avid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "an", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "is_fresh", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 获取搜索建议-响应
 *
 * @generated from message bilibili.app.interface.v1.SuggestionResult3Reply
 */
export const SuggestionResult3Reply = proto3.makeMessageType(
  "bilibili.app.interface.v1.SuggestionResult3Reply",
  () => [
    { no: 1, name: "trackid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "list", kind: "message", T: ResultItem, repeated: true },
    { no: 3, name: "exp_str", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 获取搜索建议-请求
 *
 * @generated from message bilibili.app.interface.v1.SuggestionResult3Req
 */
export const SuggestionResult3Req = proto3.makeMessageType(
  "bilibili.app.interface.v1.SuggestionResult3Req",
  () => [
    { no: 1, name: "keyword", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "highlight", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "teenagers_mode", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 搜索建议条目
 *
 * @generated from message bilibili.app.interface.v1.ResultItem
 */
export const ResultItem = proto3.makeMessageType(
  "bilibili.app.interface.v1.ResultItem",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "keyword", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "position", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "cover_size", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 7, name: "sug_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "term_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "goto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "official_verify", kind: "message", T: OfficialVerify },
    { no: 12, name: "param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "fans", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "level", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 16, name: "archives", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 17, name: "ptime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 18, name: "season_type_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "area", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "style", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "rating", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 23, name: "vote", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 24, name: "badges", kind: "message", T: ReasonStyle, repeated: true },
    { no: 25, name: "styles", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 26, name: "module_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 27, name: "live_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 28, name: "face_nft_new", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 29, name: "nft_face_icon", kind: "message", T: NftFaceIcon },
  ],
);

/**
 * 认证信息
 *
 * @generated from message bilibili.app.interface.v1.OfficialVerify
 */
export const OfficialVerify = proto3.makeMessageType(
  "bilibili.app.interface.v1.OfficialVerify",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 角标
 *
 * @generated from message bilibili.app.interface.v1.ReasonStyle
 */
export const ReasonStyle = proto3.makeMessageType(
  "bilibili.app.interface.v1.ReasonStyle",
  () => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "text_color_night", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "bg_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "bg_color_night", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "border_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "border_color_night", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "bg_style", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

