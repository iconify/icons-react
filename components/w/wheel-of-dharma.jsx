import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6hf64byk.css';
import '../../css/q/qgf_6n_3d.css';
import '../../css/y/y6av8vbrd.css';
import '../../css/v/vo71evf5d.css';
import '../../css/w/wbhafbckj.css';
import '../../css/r/r4o6ztusd.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="v6hf64byk"><path class="qgf_6n_3d"/><path class="y6av8vbrd"/></g><path class="vo71evf5d"/><path class="wbhafbckj"/><path class="r4o6ztusd"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:wheel-of-dharma",
	});
}

export default Component;
