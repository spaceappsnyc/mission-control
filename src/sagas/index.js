import watchRepos from './repos';
import watchMembers from './members';

export default function* rootSaga() {
  yield [
    watchRepos(),
    watchMembers()
  ];
};
