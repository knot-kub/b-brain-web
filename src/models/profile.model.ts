import { serializeAs } from "cerialize";

export class Profile {
  @serializeAs("email")
  email!: string;

  @serializeAs("firstName")
  firstName!: string;

  @serializeAs("lastName")
  lastName!: string;
}
