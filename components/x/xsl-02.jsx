import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9uu65b9i.css';
import '../../css/b/b1e4-eb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9uu65b9i"/><path class="b1e4-eb2y"/></g>`,
		"fallback": "hugeicons:xsl-02",
	});
}

export default Component;
