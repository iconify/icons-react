import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/a9x7u0jlb.css';
import '../../css/d/deeciebvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG8ATWfIoq" class="n1mjunbsu"><path class="a9x7u0jlb"/></mask><path mask="url(#SVG8ATWfIoq)" class="deeciebvd"/>`,
		"fallback": "basil:windows-solid",
	});
}

export default Component;
