import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scc50pnyt.css';
import '../../css/w/wgfto0gvm.css';
import '../../css/i/i0im9gb4o.css';
import '../../css/o/oyapxxb1h.css';
import '../../css/h/h1tlmbc9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scc50pnyt"/><path class="wgfto0gvm"/><path class="i0im9gb4o"/><path class="oyapxxb1h"/><path class="h1tlmbc9r"/>`,
		"fallback": "openmoji:wire",
	});
}

export default Component;
