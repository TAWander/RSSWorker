// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/metadata/restriction/restriction.proto (package bilibili.metadata.restriction, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 模式类型
 *
 * @generated from enum bilibili.metadata.restriction.ModeType
 */
export const ModeType = proto3.makeEnum(
  "bilibili.metadata.restriction.ModeType",
  [
    {no: 0, name: "NORMAL"},
    {no: 1, name: "TEENAGERS"},
    {no: 2, name: "LESSONS"},
  ],
);

/**
 * 限制条件
 *
 * @generated from message bilibili.metadata.restriction.Restriction
 */
export const Restriction = proto3.makeMessageType(
  "bilibili.metadata.restriction.Restriction",
  () => [
    { no: 1, name: "teenagers_mode", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "lessons_mode", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "mode", kind: "enum", T: proto3.getEnumType(ModeType) },
    { no: 4, name: "review", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "disable_rcmd", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

