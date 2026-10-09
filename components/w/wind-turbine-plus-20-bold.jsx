import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtevs4iam.css';
import '../../css/z/zwirr6l5z.css';
import '../../css/y/yv48g7bcu.css';
import '../../css/e/egsvn-bkw.css';
import '../../css/v/vv729ib_h.css';
import '../../css/h/hjakypb9j.css';
import '../../css/r/r1fb64blm.css';
import '../../css/p/prfptqbhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtevs4iam"/><path class="zwirr6l5z"/><path class="yv48g7bcu"/><path class="egsvn-bkw"/><path class="vv729ib_h"/><path class="hjakypb9j"/><path class="r1fb64blm"/><path class="prfptqbhf"/>`,
		"fallback": "energy-icons:wind-turbine-plus-20-bold",
	});
}

export default Component;
