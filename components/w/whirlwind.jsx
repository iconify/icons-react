import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mvkz-zbzz.css';
import '../../css/t/t4o_z7khl.css';
import '../../css/r/ryuc04bif.css';
import '../../css/p/p2yu4yz6p.css';
import '../../css/q/q1juiplek.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGW35MPe2S"><g class="aql7dnt-u"><path class="mvkz-zbzz"/><path class="t4o_z7khl"/><path class="ryuc04bif"/><path class="p2yu4yz6p"/><path class="q1juiplek"/></g></mask></defs><path mask="url(#SVGW35MPe2S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:whirlwind",
	});
}

export default Component;
