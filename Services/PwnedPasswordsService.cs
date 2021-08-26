using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Protfolio.Extenstions;

#nullable enable

namespace Portfolio.Services
{
    public class PwnedPasswordsService
    {
        readonly string _api = "https://api.pwnedpasswords.com/range/";

        public async Task<(string result, string hash)> FetchAsync(string pass)
        {
            using var http = new HttpClient();
            var hash = pass.SHA1Sum();
            var response = await http.GetStreamAsync($"{_api}{hash[..5]}");
            var count = await GetCountAsync(response, hash[5..]);

            return ($"{count} matches found", hash);
        }

        private Task<int> GetCountAsync(Stream response, string match) => Task.Run(() => 
        {
            using var reader = new StreamReader(response);
            while (reader.ReadLine() is { } line)
            {
                var splits = line.Split(":");
                if (splits[0] == match)
                    return int.Parse(splits[1]);
            }

            return 0;
        });

    }
}