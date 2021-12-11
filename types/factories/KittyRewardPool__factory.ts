/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KittyRewardPool,
  KittyRewardPoolInterface,
} from "../KittyRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bomb",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolStartTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_lastRewardTime",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bomb",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochEndTimes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochKittyPerSecond",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochTotalRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fromTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toTime",
        type: "uint256",
      },
    ],
    name: "getGeneratedReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingKITTY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accKittyPerShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isStarted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x600060045560c06040526910f0cf064dd5920000006080908152690cb49b44ba602d80000060a05262000037906006906002620001d2565b503480156200004557600080fd5b5060405162001b0038038062001b00833981810160405260408110156200006b57600080fd5b508051602090910151428111620000b2576040805162461bcd60e51b815260206004808301919091526024820152636c61746560e01b604482015290519081900360640190fd5b6001600160a01b03821615620000de57600180546001600160a01b0319166001600160a01b0384161790555b600581905562054600808201600755620bdd808201600855600680546200012a9291906000906200010b57fe5b90600052602060002001546200016960201b6200119c1790919060201c565b600a55600680546200014791620697809160019081106200010b57fe5b600b5550506000600c81905580546001600160a01b0319163317905562000244565b6000808211620001c0576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381620001ca57fe5b049392505050565b8280548282559060005260206000209081019282156200021b579160200282015b828111156200021b57825182906001600160501b0316905591602001919060010190620001f3565b50620002299291506200022d565b5090565b5b808211156200022957600081556001016200022e565b6118ac80620002546000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80635f96dc11116100ad578063b1b0c49e11610071578063b1b0c49e14610376578063b3ab15fb1461037e578063b89e73c1146103a4578063db4ffaf2146103c1578063e2bbb158146103de5761012c565b80635f96dc11146102ca578063630b5ba1146102d257806393f1a40b146102da57806396805e541461031f5780639a25cefc146103595761012c565b8063441a3e70116100f4578063441a3e701461021357806351eb05a6146102365780635312ea8e1461025357806354575af414610270578063570ca735146102a65761012c565b80631526fe271461013157806317caf6f1146101855780631ab06ee51461019f578063231f0c6a146101c45780633fa80e85146101e7575b600080fd5b61014e6004803603602081101561014757600080fd5b5035610401565b604080516001600160a01b039096168652602086019490945284840192909252606084015215156080830152519081900360a00190f35b61018d61044c565b60408051918252519081900360200190f35b6101c2600480360360408110156101b557600080fd5b5080359060200135610452565b005b61018d600480360360408110156101da57600080fd5b5080359060200135610500565b61018d600480360360408110156101fd57600080fd5b50803590602001356001600160a01b03166106bf565b6101c26004803603604081101561022957600080fd5b5080359060200135610827565b6101c26004803603602081101561024c57600080fd5b50356109d8565b6101c26004803603602081101561026957600080fd5b5035610b36565b6101c26004803603606081101561028657600080fd5b506001600160a01b03813581169160208101359160409091013516610bd2565b6102ae610d1a565b604080516001600160a01b039092168252519081900360200190f35b61018d610d29565b6101c2610d2f565b610306600480360360408110156102f057600080fd5b50803590602001356001600160a01b0316610d52565b6040805192835260208301919091528051918290030190f35b6101c26004803603608081101561033557600080fd5b508035906001600160a01b0360208201351690604081013515159060600135610d76565b61018d6004803603602081101561036f57600080fd5b5035610f73565b6102ae610f91565b6101c26004803603602081101561039457600080fd5b50356001600160a01b0316610fa0565b61018d600480360360208110156103ba57600080fd5b503561100b565b61018d600480360360208110156103d757600080fd5b503561101f565b6101c2600480360360408110156103f457600080fd5b508035906020013561102c565b6002818154811061040e57fe5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909160ff1685565b60045481565b6000546001600160a01b0316331461049b5760405162461bcd60e51b815260040180806020018281038252602b8152602001806117db602b913960400191505060405180910390fd5b6104a3610d2f565b6000600283815481106104b257fe5b60009182526020909120600590910201600481015490915060ff16156104f9576104f5826104ef836001015460045461120390919063ffffffff16565b90611260565b6004555b6001015550565b600060025b60018160ff16106106a45760076001820360ff166003811061052357fe5b0154831061069b5760076001820360ff166003811061053e57fe5b015484106105735761056b600a8260ff166003811061055957fe5b01546105658587611203565b906112ba565b9150506106b9565b60006105a9600a8360ff166003811061058857fe5b015461056560076001860360ff16600381106105a057fe5b01548790611203565b90508160ff16600114156105e5576105dc6105d5600a60005b015461056588600760005b015490611203565b8290611260565b925050506106b9565b6001820391505b60018260ff161061068c5760076001830360ff166003811061060a57fe5b0154851061063e576105dc6105d5600a8460ff166003811061062857fe5b01546105658860078760ff16600381106105cd57fe5b61067e6105d5600a8460ff166003811061065457fe5b015461056560076001870360ff166003811061066c57fe5b015460078760ff16600381106105cd57fe5b6000199092019190506105ec565b6105dc6105d5600a60006105c2565b60001901610505565b50600a546106b6906105658486611203565b90505b92915050565b600080600284815481106106cf57fe5b60009182526020808320878452600380835260408086206001600160a01b03808b168852908552818720600590960290930191820154825482516370a0823160e01b815230600482015292519398509596909590949316926370a0823192602480840193829003018186803b15801561074757600080fd5b505afa15801561075b573d6000803e3d6000fd5b505050506040513d602081101561077157600080fd5b505160028501549091504211801561078857508015155b156107eb57600061079d856002015442610500565b905060006107c46004546107be8860010154856112ba90919063ffffffff16565b9061119c565b90506107e66107df846107be84670de0b6b3a76400006112ba565b8590611260565b935050505b61081c8360010154610816670de0b6b3a76400006107be8688600001546112ba90919063ffffffff16565b90611203565b979650505050505050565b600033905060006002848154811061083b57fe5b600091825260208083208784526003825260408085206001600160a01b038816865290925292208054600590920290920192508411156108b7576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b6108c0856109d8565b60006108f18260010154610816670de0b6b3a76400006107be876003015487600001546112ba90919063ffffffff16565b90508015610943576109038482611313565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b841561096d5781546109559086611203565b8255825461096d906001600160a01b031685876113c9565b6003830154825461098b91670de0b6b3a7640000916107be916112ba565b600183015560408051868152905187916001600160a01b038716917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505050505050565b6000600282815481106109e757fe5b9060005260206000209060050201905080600201544211610a085750610b33565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610a5257600080fd5b505afa158015610a66573d6000803e3d6000fd5b505050506040513d6020811015610a7c57600080fd5b5051905080610a92575042600290910155610b33565b600482015460ff16610ac3576004808301805460ff191660019081179091558301549054610abf91611260565b6004555b60045415610b2a576000610adb836002015442610500565b90506000610afc6004546107be8660010154856112ba90919063ffffffff16565b9050610b22610b17846107be84670de0b6b3a76400006112ba565b600386015490611260565b600385015550505b50426002909101555b50565b600060028281548110610b4557fe5b600091825260208083208584526003825260408085203380875293528420805485825560018201959095556005909302018054909450919291610b95916001600160a01b039190911690836113c9565b604080518281529051859133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a350505050565b6000546001600160a01b03163314610c1b5760405162461bcd60e51b815260040180806020018281038252602b8152602001806117db602b913960400191505060405180910390fd5b60085462278d0001421015610d01576001546001600160a01b0384811691161415610c75576040805162461bcd60e51b815260206004820152600560248201526410b137b6b160d91b604482015290519081900360640190fd5b60025460005b81811015610cfe57600060028281548110610c9257fe5b6000918252602090912060059091020180549091506001600160a01b0387811691161415610cf5576040805162461bcd60e51b815260206004820152600b60248201526a10b837b7b6173a37b5b2b760a91b604482015290519081900360640190fd5b50600101610c7b565b50505b610d156001600160a01b03841682846113c9565b505050565b6000546001600160a01b031681565b60055481565b60025460005b81811015610d4e57610d46816109d8565b600101610d35565b5050565b60036020908152600092835260408084209091529082529020805460019091015482565b6000546001600160a01b03163314610dbf5760405162461bcd60e51b815260040180806020018281038252602b8152602001806117db602b913960400191505060405180910390fd5b610dc88361141b565b8115610dd657610dd6610d2f565b600554421015610e025780610dee5750600554610dfd565b600554811015610dfd57506005545b610e16565b801580610e0e57504281105b15610e165750425b600060055482111580610e295750428211155b6040805160a0810182526001600160a01b03878116825260208201898152928201868152600060608401818152861580156080870190815260028054600181018255945295517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600590940293840180546001600160a01b031916919096161790945594517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf82015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad082015592517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad184015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad2909201805460ff191692151592909217909155909150610f6c57600454610f689086611260565b6004555b5050505050565b60068181548110610f8057fe5b600091825260209091200154905081565b6001546001600160a01b031681565b6000546001600160a01b03163314610fe95760405162461bcd60e51b815260040180806020018281038252602b8152602001806117db602b913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6007816003811061101857fe5b0154905081565b600a816003811061101857fe5b600033905060006002848154811061104057fe5b600091825260208083208784526003825260408085206001600160a01b038816865290925292206005909102909101915061107a856109d8565b8054156111065760006110b28260010154610816670de0b6b3a76400006107be876003015487600001546112ba90919063ffffffff16565b90508015611104576110c48482611313565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b505b8315611132578154611123906001600160a01b03168430876114b5565b805461112f9085611260565b81555b6003820154815461115091670de0b6b3a7640000916107be916112ba565b600182015560408051858152905186916001600160a01b038616917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a35050505050565b60008082116111f2576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816111fb57fe5b049392505050565b60008282111561125a576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000828201838110156106b6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000826112c9575060006106b9565b828202828482816112d657fe5b04146106b65760405162461bcd60e51b815260040180806020018281038252602181526020018061182c6021913960400191505060405180910390fd5b600154604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561135e57600080fd5b505afa158015611372573d6000803e3d6000fd5b505050506040513d602081101561138857600080fd5b505190508015610d1557808211156113b6576001546113b1906001600160a01b031684836113c9565b610d15565b600154610d15906001600160a01b031684845b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d15908490611515565b60025460005b81811015610d1557826001600160a01b03166002828154811061144057fe5b60009182526020909120600590910201546001600160a01b031614156114ad576040805162461bcd60e51b815260206004820152601f60248201527f4b69747479526577617264506f6f6c3a206578697374696e6720706f6f6c3f00604482015290519081900360640190fd5b600101611421565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261150f908590611515565b50505050565b606061156a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115c69092919063ffffffff16565b805190915015610d155780806020019051602081101561158957600080fd5b5051610d155760405162461bcd60e51b815260040180806020018281038252602a81526020018061184d602a913960400191505060405180910390fd5b60606115d584846000856115df565b90505b9392505050565b6060824710156116205760405162461bcd60e51b81526004018080602001828103825260268152602001806118066026913960400191505060405180910390fd5b61162985611730565b61167a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106116b95780518252601f19909201916020918201910161169a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461171b576040519150601f19603f3d011682016040523d82523d6000602084013e611720565b606091505b509150915061081c828286611736565b3b151590565b606083156117455750816115d8565b8251156117555782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561179f578181015183820152602001611787565b50505050905090810190601f1680156117cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4b69747479526577617264506f6f6c3a2063616c6c6572206973206e6f7420746865206f70657261746f72416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220b8db31503e173f6d7e0d6b49ae38d1a6c67149bdfbbaa16375852283a72821ae64736f6c634300060c0033";

type KittyRewardPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KittyRewardPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KittyRewardPool__factory extends ContractFactory {
  constructor(...args: KittyRewardPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _bomb: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KittyRewardPool> {
    return super.deploy(
      _bomb,
      _poolStartTime,
      overrides || {}
    ) as Promise<KittyRewardPool>;
  }
  getDeployTransaction(
    _bomb: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_bomb, _poolStartTime, overrides || {});
  }
  attach(address: string): KittyRewardPool {
    return super.attach(address) as KittyRewardPool;
  }
  connect(signer: Signer): KittyRewardPool__factory {
    return super.connect(signer) as KittyRewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KittyRewardPoolInterface {
    return new utils.Interface(_abi) as KittyRewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KittyRewardPool {
    return new Contract(address, _abi, signerOrProvider) as KittyRewardPool;
  }
}