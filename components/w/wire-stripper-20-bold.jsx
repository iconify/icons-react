import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvsb-2b0n.css';
import '../../css/n/nbh4wzn0v.css';
import '../../css/g/gu86148fg.css';
import '../../css/e/ensolhbqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvsb-2b0n"/><path class="nbh4wzn0v"/><path class="gu86148fg"/><path class="ensolhbqc"/>`,
		"fallback": "energy-icons:wire-stripper-20-bold",
	});
}

export default Component;
