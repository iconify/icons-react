import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-mr4fbpj.css';
import '../../css/o/os71ptboc.css';
import '../../css/x/xiq0mebla.css';
import '../../css/b/byz412mey.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-mr4fbpj"/><circle class="os71ptboc"/><path class="xiq0mebla"/><path class="byz412mey"/>`,
		"fallback": "thesvg-color:youtube-music",
	});
}

export default Component;
