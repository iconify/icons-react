import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtevs4iam.css';
import '../../css/z/zwirr6l5z.css';
import '../../css/s/sk39s48-r.css';
import '../../css/e/egsvn-bkw.css';
import '../../css/j/jq18rebpo.css';
import '../../css/n/n-490bmoh.css';
import '../../css/v/vku1w-b3a.css';
import '../../css/c/c2zz1d1wi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtevs4iam"/><path class="zwirr6l5z"/><path class="sk39s48-r"/><path class="egsvn-bkw"/><path class="jq18rebpo"/><path class="n-490bmoh"/><path class="vku1w-b3a"/><path class="c2zz1d1wi"/>`,
		"fallback": "energy-icons:wind-turbine-x-20-bold",
	});
}

export default Component;
