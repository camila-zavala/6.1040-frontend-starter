import { ObjectId } from "mongodb";
import DocCollection, { BaseDoc } from "../framework/doc";
import { DirectMessageDoc } from "./directmessege";
import { NotAllowedError, NotFoundError } from "./errors";
import { PostDoc } from "./post";
import { UserDoc } from "./user";

export interface ReactionDoc extends BaseDoc {
  author: ObjectId;
  media: ObjectId;
  likes: number;
}

export default class ReactionConcept {
  private allReactions = new DocCollection<ReactionDoc>("Reactions");

  async addReaction(author: ObjectId, id: ObjectId, likes: number) {
    const reaction_id = await this.allReactions.readOne({ media: id });
    if (reaction_id !== null) {
      reaction_id.likes += 1;
    } else {
      const _id = await this.allReactions.createOne({ author, media: id, likes });
      return "reaction made successfully";
    }
  }
  async getReactionsForPost(id: ObjectId) {
    const reactions = await this.allReactions.readMany({ media: id });
    return reactions;
  }

  async removeReaction(user: ObjectId, id: ObjectId) {
    this.isAuthor(user, id);
    await this.allReactions.deleteOne({ id });
    return "Reaction deleted successfully";
  }

  async isAuthor(user: ObjectId, reaction_id: ObjectId) {
    const reaction = await this.allReactions.readOne({ _id: reaction_id });
    if (!reaction) {
      throw new NotFoundError(`Message ${reaction_id} does not exist!`);
    }
    if (reaction.author.toString() !== user.toString()) {
      throw new ReactionAuthorNotMatchError(user, reaction_id);
    }
  }

  async notifyUser(user: UserDoc, content: PostDoc | DirectMessageDoc) {
    throw new Error("not implemented yet");
  }
}
export class ReactionAuthorNotMatchError extends NotAllowedError {
  constructor(
    public readonly author: ObjectId,
    public readonly _id: ObjectId,
  ) {
    super("{0} is not the author of post {1}!", author, _id);
  }
}
