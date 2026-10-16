import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su8djsbpl.css';
import '../../css/p/p3d2yabbm.css';
import '../../css/z/zcn-sxbli.css';
import '../../css/f/f39wppbjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su8djsbpl"/><path class="p3d2yabbm"/><path class="zcn-sxbli"/><path class="f39wppbjw"/>`,
		"fallback": "energy-icons:wire-stripper-48-bold",
	});
}

export default Component;
