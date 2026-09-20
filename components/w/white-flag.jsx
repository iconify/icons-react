import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy19rebyk.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/j8gr-osck.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/u/ur9ub8kkl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGCHgwedXR" class="wy19rebyk"/></defs><g class="n1mjunbsu"><path class="j8gr-osck"/><use href="#SVGCHgwedXR"/></g><g class="dcqdxh5zc"><use href="#SVGCHgwedXR" class="j-npdpb0r"/><path class="ur9ub8kkl"/></g>`,
		"fallback": "openmoji:white-flag",
	});
}

export default Component;
