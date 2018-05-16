import { Entity } from './entity.model';
export class UserComment extends Entity {

  static default(): any {
    return new UserComment(null, null, 'roger.alvarez', 'Roger Alvarez Castrillón', null, [], new Date());
  }
    constructor(
        public targetId: string,
        public id: string,
        public userId: string,
        public userName: string,
        public message: string,
        public replies: Comment[],
        public date: Date = new Date()
    ) {
      super(id);
    }
}
