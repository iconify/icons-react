import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l94p16b8n.css';
import '../../css/p/pdn-wtbcg.css';
import '../../css/r/r-yq4eadc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l94p16b8n"/><path class="pdn-wtbcg"/><path class="r-yq4eadc"/></g>`,
		"fallback": "glyphs-poly:zoom-in",
	});
}

export default Component;
