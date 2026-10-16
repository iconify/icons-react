import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stxp-tbqc.css';
import '../../css/u/ua2fsac2w.css';
import '../../css/z/z_6mclb3c.css';
import '../../css/x/xxnuzjbjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stxp-tbqc"/><path class="ua2fsac2w"/><path class="z_6mclb3c"/><path class="xxnuzjbjb"/>`,
		"fallback": "energy-icons:wire-stripper-20",
	});
}

export default Component;
