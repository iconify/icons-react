import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t65xpx6zu.css';
import '../../css/p/psnhmojdp.css';
import '../../css/b/b8blzr_2w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t65xpx6zu"/><path class="psnhmojdp"/><path class="b8blzr_2w"/>`,
		"fallback": "energy-icons:wind-turbine-off-20",
	});
}

export default Component;
