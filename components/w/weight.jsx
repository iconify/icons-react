import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp6fsnq_h.css';
import '../../css/y/ytedlub9t.css';
import '../../css/s/sgymwhbwu.css';
import '../../css/e/e__krny-k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDSqNLcQF"><g class="ft5dv1b6b"><path class="vp6fsnq_h"/><path class="ytedlub9t"/><path class="sgymwhbwu"/><path class="e__krny-k"/></g></mask></defs><path mask="url(#SVGDSqNLcQF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:weight",
	});
}

export default Component;
