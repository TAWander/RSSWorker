// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/playerunite/pgcanymodel/pgcanymodel.proto (package bilibili.app.playerunite.pgcanymodel, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Event, PlayAbilityExtConf, PlayExtInfo, PlayViewBusinessInfo, ViewInfo } from "../../../pgc/gateway/player/v2/playurl_pb.js";

/**
 * @generated from message bilibili.app.playerunite.pgcanymodel.PGCAnyModel
 */
export const PGCAnyModel = proto3.makeMessageType(
  "bilibili.app.playerunite.pgcanymodel.PGCAnyModel",
  () => [
    { no: 3, name: "business", kind: "message", T: PlayViewBusinessInfo },
    { no: 4, name: "event", kind: "message", T: Event },
    { no: 5, name: "view_info", kind: "message", T: ViewInfo },
    { no: 6, name: "play_ext_conf", kind: "message", T: PlayAbilityExtConf },
    { no: 7, name: "play_ext_info", kind: "message", T: PlayExtInfo },
  ],
);

