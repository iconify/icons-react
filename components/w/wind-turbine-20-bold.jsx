import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bepxe4bel.css';
import '../../css/j/j7sm7rbxk.css';
import '../../css/s/sai8ik0bu.css';
import '../../css/w/w-imt2b_l.css';
import '../../css/p/pp6ycgbmp.css';
import '../../css/i/itt8lj0lf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bepxe4bel"/><path class="j7sm7rbxk"/><path class="sai8ik0bu"/><path class="w-imt2b_l"/><path class="pp6ycgbmp"/><path class="itt8lj0lf"/>`,
		"fallback": "energy-icons:wind-turbine-20-bold",
	});
}

export default Component;
