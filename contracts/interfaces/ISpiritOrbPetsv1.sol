// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

interface ISpiritOrbPetsv1 is IERC721, IERC721Enumerable {
  function getPetInfo(uint16 id) external view returns (
    uint8 level,
    bool active
  );

  function getPetCooldowns(uint16 id) external view returns (
    uint64 cdPlay,
    uint64 cdFeed,
    uint64 cdClean,
    uint64 cdTrain,
    uint64 cdDaycare
  );

  function getPausedState() external view returns (bool);
  function getMaxPetLevel() external view returns (uint8);
  function petName(uint16 id) external view returns (string memory);

  function setPetName(uint16 id, string memory name) external;
  function setPetLevel(uint16 id, uint8 level) external;
  function setPetActive(uint16 id, bool active) external;
  function setPetCdPlay(uint16 id, uint64 cdPlay) external;
  function setPetCdFeed(uint16 id, uint64 cdFeed) external;
  function setPetCdClean(uint16 id, uint64 cdClean) external;
  function setPetCdTrain(uint16 id, uint64 cdTrain) external;
  function setPetCdDaycare(uint16 id, uint64 cdDaycare) external;
}