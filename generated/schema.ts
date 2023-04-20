// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get ipfsURI(): string | null {
    let value = this.get("ipfsURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsURI(value: string | null) {
    if (!value) {
      this.unset("ipfsURI");
    } else {
      this.set("ipfsURI", Value.fromString(<string>value));
    }
  }

  get updatedAtTimestamp(): BigInt | null {
    let value = this.get("updatedAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updatedAtTimestamp(value: BigInt | null) {
    if (!value) {
      this.unset("updatedAtTimestamp");
    } else {
      this.set("updatedAtTimestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class TokenMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenMetadata", id.toString(), this);
    }
  }

  static load(id: string): TokenMetadata | null {
    return changetype<TokenMetadata | null>(store.get("TokenMetadata", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get trait_hat(): string | null {
    let value = this.get("trait_hat");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trait_hat(value: string | null) {
    if (!value) {
      this.unset("trait_hat");
    } else {
      this.set("trait_hat", Value.fromString(<string>value));
    }
  }

  get trait_fur(): string | null {
    let value = this.get("trait_fur");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trait_fur(value: string | null) {
    if (!value) {
      this.unset("trait_fur");
    } else {
      this.set("trait_fur", Value.fromString(<string>value));
    }
  }

  get trait_background(): string | null {
    let value = this.get("trait_background");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trait_background(value: string | null) {
    if (!value) {
      this.unset("trait_background");
    } else {
      this.set("trait_background", Value.fromString(<string>value));
    }
  }

  get trait_eyes(): string | null {
    let value = this.get("trait_eyes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trait_eyes(value: string | null) {
    if (!value) {
      this.unset("trait_eyes");
    } else {
      this.set("trait_eyes", Value.fromString(<string>value));
    }
  }

  get trait_clothes(): string | null {
    let value = this.get("trait_clothes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trait_clothes(value: string | null) {
    if (!value) {
      this.unset("trait_clothes");
    } else {
      this.set("trait_clothes", Value.fromString(<string>value));
    }
  }

  get trait_mouth(): string | null {
    let value = this.get("trait_mouth");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trait_mouth(value: string | null) {
    if (!value) {
      this.unset("trait_mouth");
    } else {
      this.set("trait_mouth", Value.fromString(<string>value));
    }
  }
}
