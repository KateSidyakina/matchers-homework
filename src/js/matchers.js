export default function matchIndicator(users) {
  return users.sort((a, b) => b.health - a.health);
}
