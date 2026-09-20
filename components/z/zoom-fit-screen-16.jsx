import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9snzwc9m.css';
import '../../css/m/moby6ptxx.css';
import '../../css/p/pvxq0hblh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9snzwc9m"/><path class="moby6ptxx"/><path class="pvxq0hblh"/>`,
		"fallback": "qlementine-icons:zoom-fit-screen-16",
	});
}

export default Component;
