import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puoj9enyr.css';
import '../../css/m/mkvae1bnc.css';
import '../../css/z/z6fy8jbcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puoj9enyr"/><path class="mkvae1bnc"/><path class="z6fy8jbcw"/>`,
		"fallback": "energy-icons:weir-48-bold",
	});
}

export default Component;
