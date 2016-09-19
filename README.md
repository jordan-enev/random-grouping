# Random grouping

## Usage 
`randomGrouping(array, options)`

## Supported parameters
- {Array} **array** - Elements those are randomized
- {Object} [**options**] - Optional settings, these determine whether passed in array elements will be randomized by chunks or groups.
If omitted - then the array will be only randomized, without splitting into the groups. It has the following structure: 
```
{
    {Int} [chunks]: Creates groups of N (chunks) elements,
    {Int} [groups]: How many groups of elements to be created
}
```

## Examples
### Randomize by chunks
> Let's say that we have the following `array = [1,2,3,4,5,6]`. If we want to split it by 2 chunks, we'll get as result three groups of arrays with randomized elemenents: `[ [5,3], [2,4], [6,1] ]`

`randomGrouping([1,2,3,4,5,6], {chunks: 2})`
### Randomize by groups
> Let's say that we have the following `array = [1,2,3,4,5,6]`. If we want to split it by 2 groups, we'll get as result two groups of arrays with randomized elemenents: `[ [5,3,2], [4,6,1] ]`

`randomGrouping([1,2,3,4,5,6], {groups: 2})`
