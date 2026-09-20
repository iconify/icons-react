import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/o/o493bgqoz.css';
import '../../css/y/yibo3vftr.css';
import '../../css/v/v7et8abwg.css';
import '../../css/a/azcwg7e-d.css';
import '../../css/o/otit0l4ks.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="o493bgqoz"/><path class="yibo3vftr"/><path class="v7et8abwg"/><circle class="azcwg7e-d"/><circle class="otit0l4ks"/>`,
		"fallback": "openmoji:winking-face",
	});
}

export default Component;
