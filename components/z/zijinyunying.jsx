import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/b/bns6hkbpl.css';
import '../../css/e/erfgj169s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGP03YqePH"><g class="adexpl72i"><path class="bns6hkbpl"/><path class="erfgj169s"/></g></mask></defs><path mask="url(#SVGP03YqePH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:zijinyunying",
	});
}

export default Component;
