import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxe9q8-qa.css';
import '../../css/u/u6ksllbyh.css';
import '../../css/w/wfeudqbyr.css';
import '../../css/j/j2lk5jb4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxe9q8-qa"/><path class="u6ksllbyh"/><path class="wfeudqbyr"/><path class="j2lk5jb4o"/>`,
		"fallback": "energy-icons:wheelbarrow-48-bold",
	});
}

export default Component;
