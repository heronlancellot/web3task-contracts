// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class AuthorizedOperator extends ethereum.Event {
  get params(): AuthorizedOperator__Params {
    return new AuthorizedOperator__Params(this);
  }
}

export class AuthorizedOperator__Params {
  _event: AuthorizedOperator;

  constructor(event: AuthorizedOperator) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interfaceId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AuthorizedPersonnel extends ethereum.Event {
  get params(): AuthorizedPersonnel__Params {
    return new AuthorizedPersonnel__Params(this);
  }
}

export class AuthorizedPersonnel__Params {
  _event: AuthorizedPersonnel;

  constructor(event: AuthorizedPersonnel) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get authorized(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class TaskCreated extends ethereum.Event {
  get params(): TaskCreated__Params {
    return new TaskCreated__Params(this);
  }
}

export class TaskCreated__Params {
  _event: TaskCreated;

  constructor(event: TaskCreated) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assignee(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get endDate(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TaskStarted extends ethereum.Event {
  get params(): TaskStarted__Params {
    return new TaskStarted__Params(this);
  }
}

export class TaskStarted__Params {
  _event: TaskStarted;

  constructor(event: TaskStarted) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get assignee(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TaskUpdated extends ethereum.Event {
  get params(): TaskUpdated__Params {
    return new TaskUpdated__Params(this);
  }
}

export class TaskUpdated__Params {
  _event: TaskUpdated;

  constructor(event: TaskUpdated) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Web3Task__createTaskInput_taskStruct extends ethereum.Tuple {
  get status(): i32 {
    return this[0].toI32();
  }

  get title(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get reward(): BigInt {
    return this[3].toBigInt();
  }

  get endDate(): BigInt {
    return this[4].toBigInt();
  }

  get authorized(): Array<BigInt> {
    return this[5].toBigIntArray();
  }

  get creator(): BigInt {
    return this[6].toBigInt();
  }

  get assignee(): Address {
    return this[7].toAddress();
  }

  get metadata(): string {
    return this[8].toString();
  }
}

export class Web3Task__getTaskResultValue0Struct extends ethereum.Tuple {
  get status(): i32 {
    return this[0].toI32();
  }

  get title(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get reward(): BigInt {
    return this[3].toBigInt();
  }

  get endDate(): BigInt {
    return this[4].toBigInt();
  }

  get authorized(): Array<BigInt> {
    return this[5].toBigIntArray();
  }

  get creator(): BigInt {
    return this[6].toBigInt();
  }

  get assignee(): Address {
    return this[7].toAddress();
  }

  get metadata(): string {
    return this[8].toString();
  }
}

export class Web3Task extends ethereum.SmartContract {
  static bind(address: Address): Web3Task {
    return new Web3Task("Web3Task", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createTask(_task: Web3Task__createTaskInput_taskStruct): BigInt {
    let result = super.call(
      "createTask",
      "createTask((uint8,string,string,uint256,uint256,uint256[],uint256,address,string)):(uint256)",
      [ethereum.Value.fromTuple(_task)]
    );

    return result[0].toBigInt();
  }

  try_createTask(
    _task: Web3Task__createTaskInput_taskStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createTask",
      "createTask((uint8,string,string,uint256,uint256,uint256[],uint256,address,string)):(uint256)",
      [ethereum.Value.fromTuple(_task)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTask(_taskId: BigInt): Web3Task__getTaskResultValue0Struct {
    let result = super.call(
      "getTask",
      "getTask(uint256):((uint8,string,string,uint256,uint256,uint256[],uint256,address,string))",
      [ethereum.Value.fromUnsignedBigInt(_taskId)]
    );

    return changetype<Web3Task__getTaskResultValue0Struct>(result[0].toTuple());
  }

  try_getTask(
    _taskId: BigInt
  ): ethereum.CallResult<Web3Task__getTaskResultValue0Struct> {
    let result = super.tryCall(
      "getTask",
      "getTask(uint256):((uint8,string,string,uint256,uint256,uint256[],uint256,address,string))",
      [ethereum.Value.fromUnsignedBigInt(_taskId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Web3Task__getTaskResultValue0Struct>(value[0].toTuple())
    );
  }

  hasAuthorization(_authorizationId: BigInt, _address: Address): boolean {
    let result = super.call(
      "hasAuthorization",
      "hasAuthorization(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_authorizationId),
        ethereum.Value.fromAddress(_address)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasAuthorization(
    _authorizationId: BigInt,
    _address: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasAuthorization",
      "hasAuthorization(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_authorizationId),
        ethereum.Value.fromAddress(_address)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOperator(_interfaceId: Bytes, _authorizationId: BigInt): boolean {
    let result = super.call("isOperator", "isOperator(bytes4,uint256):(bool)", [
      ethereum.Value.fromFixedBytes(_interfaceId),
      ethereum.Value.fromUnsignedBigInt(_authorizationId)
    ]);

    return result[0].toBoolean();
  }

  try_isOperator(
    _interfaceId: Bytes,
    _authorizationId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOperator",
      "isOperator(bytes4,uint256):(bool)",
      [
        ethereum.Value.fromFixedBytes(_interfaceId),
        ethereum.Value.fromUnsignedBigInt(_authorizationId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  taskId(): BigInt {
    let result = super.call("taskId", "taskId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_taskId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("taskId", "taskId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CancelTaskCall extends ethereum.Call {
  get inputs(): CancelTaskCall__Inputs {
    return new CancelTaskCall__Inputs(this);
  }

  get outputs(): CancelTaskCall__Outputs {
    return new CancelTaskCall__Outputs(this);
  }
}

export class CancelTaskCall__Inputs {
  _call: CancelTaskCall;

  constructor(call: CancelTaskCall) {
    this._call = call;
  }

  get _taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _authorizedId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelTaskCall__Outputs {
  _call: CancelTaskCall;

  constructor(call: CancelTaskCall) {
    this._call = call;
  }
}

export class CompleteTaskCall extends ethereum.Call {
  get inputs(): CompleteTaskCall__Inputs {
    return new CompleteTaskCall__Inputs(this);
  }

  get outputs(): CompleteTaskCall__Outputs {
    return new CompleteTaskCall__Outputs(this);
  }
}

export class CompleteTaskCall__Inputs {
  _call: CompleteTaskCall;

  constructor(call: CompleteTaskCall) {
    this._call = call;
  }

  get _taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _authorizedId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CompleteTaskCall__Outputs {
  _call: CompleteTaskCall;

  constructor(call: CompleteTaskCall) {
    this._call = call;
  }
}

export class CreateTaskCall extends ethereum.Call {
  get inputs(): CreateTaskCall__Inputs {
    return new CreateTaskCall__Inputs(this);
  }

  get outputs(): CreateTaskCall__Outputs {
    return new CreateTaskCall__Outputs(this);
  }
}

export class CreateTaskCall__Inputs {
  _call: CreateTaskCall;

  constructor(call: CreateTaskCall) {
    this._call = call;
  }

  get _task(): CreateTaskCall_taskStruct {
    return changetype<CreateTaskCall_taskStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CreateTaskCall__Outputs {
  _call: CreateTaskCall;

  constructor(call: CreateTaskCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateTaskCall_taskStruct extends ethereum.Tuple {
  get status(): i32 {
    return this[0].toI32();
  }

  get title(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get reward(): BigInt {
    return this[3].toBigInt();
  }

  get endDate(): BigInt {
    return this[4].toBigInt();
  }

  get authorized(): Array<BigInt> {
    return this[5].toBigIntArray();
  }

  get creator(): BigInt {
    return this[6].toBigInt();
  }

  get assignee(): Address {
    return this[7].toAddress();
  }

  get metadata(): string {
    return this[8].toString();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _authorizedId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class ReviewTaskCall extends ethereum.Call {
  get inputs(): ReviewTaskCall__Inputs {
    return new ReviewTaskCall__Inputs(this);
  }

  get outputs(): ReviewTaskCall__Outputs {
    return new ReviewTaskCall__Outputs(this);
  }
}

export class ReviewTaskCall__Inputs {
  _call: ReviewTaskCall;

  constructor(call: ReviewTaskCall) {
    this._call = call;
  }

  get _taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _authorizedId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ReviewTaskCall__Outputs {
  _call: ReviewTaskCall;

  constructor(call: ReviewTaskCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetAuthorizationCall extends ethereum.Call {
  get inputs(): SetAuthorizationCall__Inputs {
    return new SetAuthorizationCall__Inputs(this);
  }

  get outputs(): SetAuthorizationCall__Outputs {
    return new SetAuthorizationCall__Outputs(this);
  }
}

export class SetAuthorizationCall__Inputs {
  _call: SetAuthorizationCall;

  constructor(call: SetAuthorizationCall) {
    this._call = call;
  }

  get _authorizationId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _authorizedAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _isAuthorized(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetAuthorizationCall__Outputs {
  _call: SetAuthorizationCall;

  constructor(call: SetAuthorizationCall) {
    this._call = call;
  }
}

export class SetOperatorCall extends ethereum.Call {
  get inputs(): SetOperatorCall__Inputs {
    return new SetOperatorCall__Inputs(this);
  }

  get outputs(): SetOperatorCall__Outputs {
    return new SetOperatorCall__Outputs(this);
  }
}

export class SetOperatorCall__Inputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }

  get _interfaceId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _authorizationId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _isAuthorized(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class StartTaskCall extends ethereum.Call {
  get inputs(): StartTaskCall__Inputs {
    return new StartTaskCall__Inputs(this);
  }

  get outputs(): StartTaskCall__Outputs {
    return new StartTaskCall__Outputs(this);
  }
}

export class StartTaskCall__Inputs {
  _call: StartTaskCall;

  constructor(call: StartTaskCall) {
    this._call = call;
  }

  get _taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _authorizedId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StartTaskCall__Outputs {
  _call: StartTaskCall;

  constructor(call: StartTaskCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}
