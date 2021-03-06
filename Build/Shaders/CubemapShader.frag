#version 430

in vec3 position;

uniform sampler2D equirectangularMap;

out vec4 out_Color;

const vec2 invAtan = vec2(0.1591, 0.3183);
vec2 SampleSphericalMap(vec3 v)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= invAtan;
    uv += 0.5;
    return uv;
}

void main()
{		
    vec2 uv = SampleSphericalMap(normalize(position));
    vec3 color = texture(equirectangularMap, uv).rgb;
    
    out_Color = vec4(color, 1.0);
}
