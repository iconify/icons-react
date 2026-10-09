import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw6_mhbkb.css';
import '../../css/w/wbu9xubvi.css';
import '../../css/z/zfrriw87y.css';
import '../../css/n/nxw8z6bfd.css';
import '../../css/x/xhnsdjblr.css';
import '../../css/s/sud4f5b2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw6_mhbkb"/><path class="wbu9xubvi"/><path class="zfrriw87y"/><path class="nxw8z6bfd"/><path class="xhnsdjblr"/><path class="sud4f5b2f"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-spinning-20-bold",
	});
}

export default Component;
