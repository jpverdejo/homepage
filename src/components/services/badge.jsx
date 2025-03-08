export default function Badge({ badge }) {
  const {href, badgeUrl} = badge

  const badgeElement = <img src={badgeUrl} style={{height: 16 + "px"}}/>
  return (
    <div
      className={`w-auto text-center rounded-b-[3px] overflow-hidden site-monitor-status`}
    >
      {href !== null && <a href={href}>{badgeElement}</a>}
      {href === null && {badgeElement}}
    </div>
  );
}
