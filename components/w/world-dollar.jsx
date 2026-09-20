import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jdnobwitj.css';
import '../../css/b/bwa76acxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jdnobwitj"/><path class="bwa76acxq"/></g>`,
		"fallback": "tabler:world-dollar",
	});
}

export default Component;
