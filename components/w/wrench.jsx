import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhem-8biu.css';
import '../../css/e/egmofcb2u.css';
import '../../css/a/ak2m5l7tw.css';
import '../../css/k/krf-lxbxu.css';
import '../../css/h/h2mdh_wqt.css';
import '../../css/v/vtf01fjpm.css';
import '../../css/m/m9h0_ybzo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGbmenrwgA" cx="-8.4" cy="-19" r="209.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="dhem-8biu"/><stop offset=".85" class="egmofcb2u"/><stop offset="1" class="egmofcb2u"/></radialGradient></defs><path class="ak2m5l7tw"/><path class="krf-lxbxu"/><path fill="url(#SVGbmenrwgA)" transform="rotate(45 -98.279 472.195)scale(2.2)" class="h2mdh_wqt"/><path class="vtf01fjpm"/><path class="m9h0_ybzo"/>`,
		"fallback": "xero-emoji:wrench",
	});
}

export default Component;
