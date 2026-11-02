import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/ka3emi0uf.css';
import '../../css/r/rwas1e4is.css';
import '../../css/a/apswarb1h.css';
import '../../css/u/ucxxfd9jl.css';
import '../../css/z/zhre2cbug.css';
import '../../css/r/r4udylbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ka3emi0uf"/><path class="rwas1e4is"/><path class="apswarb1h"/><path class="ucxxfd9jl"/><path class="zhre2cbug"/><path class="r4udylbjz"/></g>`,
		"fallback": "matita:wind",
	});
}

export default Component;
